import * as config from '$lib/config';

export async function GET({ fetch }) {
  const response = await fetch('/API/projects'); // Assuming you have an API endpoint for fetching repositories
  const repos: Repository[] = await response.json();

  const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>${config.title}</title>
        <description>${config.description}</description>
        <link>${config.url}</link>
        <atom:link href="${config.url}rss.xml" rel="self" type="application/rss+xml"/>
        ${repos
          .map(
            (repo) => `
              <item>
                <title>${repo.name}</title>
                <description>${repo.description || 'No description available'}</description>
                <link>${repo.html_url}</link>
                <guid isPermaLink="true">${repo.html_url}</guid>
                <pubDate>${new Date(repo.created_at).toUTCString()}</pubDate>
                <category>${repo.language || 'Unknown'}</category>
                <author>${repo.full_name}</author>
                <comments>${repo.open_issues_count} open issues</comments>
                <license>${repo.license || 'No license specified'}</license>
                <visibility>${repo.visibility}</visibility>
                <forks>${repo.forks}</forks>
                <openIssues>${repo.open_issues}</openIssues>
                <watchers>${repo.watchers}</watchers>
              </item>
            `
          )
          .join('')}
      </channel>
    </rss>
  `.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
