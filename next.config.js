/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/checklist",
        destination: "https://neminemi.notion.site/57b63aade5a245799877ef94e6b9c88d?v=d628db32357542f0879887aaafee4894",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
