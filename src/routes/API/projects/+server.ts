
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
    const response = await fetch('https://api.github.com/user/repos?visibility=all&sort=created', {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${env.PRIVATE_GITHUB_API_KEY}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    const notWanted = ['IslamZaoui', 'uselesstools', 'ngrok']

    const data = await response.json()

    let repos: Repository[] = []

    if (Array.isArray(data)) {
        repos = data.map((item: any) => ({
            name: item.name,
            full_name: item.full_name,
            description: item.description,
            html_url: item.html_url,
            created_at: item.created_at,
            updated_at: item.updated_at,
            language: item.language,
            forks_count: item.forks_count,
            open_issues_count: item.open_issues_count,
            license: item.license ? item.license.name : null,
            visibility: item.visibility,
            forks: item.forks,
            open_issues: item.open_issues,
            watchers: item.watchers,
        })).filter((repo) =>
            !notWanted.includes(repo.name)
        );
    } else {
        repos = []
    }
    return new Response(JSON.stringify(repos));
};