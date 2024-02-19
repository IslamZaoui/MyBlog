import type { RequestHandler } from '@sveltejs/kit'
import { supabase } from '$lib/server'

export const POST: RequestHandler = async ({ params }) => {
    const slug = params.slug

    try {
        await supabase.rpc('update_views', { page_slug: slug })
        return new Response(`Successfully incremented page: ${slug}`)
    } catch (err) {
        return new Response((err as Error).message, { status: 500 })
    }
}

export const GET: RequestHandler = async ({ params }) => {
    const slug = params.slug

    try {
        const { data, error } = await supabase
            .from('analytics')
            .select('views')
            .filter('slug', 'eq', slug)

        if (error)
            return new Response((error).message, { status: 500 })

        return new Response(data[0].views || 0, { headers: { 'content-type': 'application/json' } })

    } catch (err) {
        return new Response((err as Error).message, { status: 500 })
    }
};
