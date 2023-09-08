type Post = {
    slug: string
    title: string
    description: string
    date: string
    tags: string[]
    words: number
    readTime: number
    published: boolean
    views: number
}

interface Repository {
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    created_at: string;
    updated_at: string;
    language: string | null;
    forks_count: number;
    open_issues_count: number;
    license: string | null;
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
  }