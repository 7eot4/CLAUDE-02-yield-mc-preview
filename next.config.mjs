// Two deployment targets share this one config:
//  - Docker (docs/DEPLOYMENT.md, website/Dockerfile): output: 'standalone' -
//    a minimal server bundle, the default below.
//  - GitHub Pages preview (CLAUDE-02-yield-mc-preview, a separate public
//    repo - see docs/DEPLOYMENT.md's "Public preview" section): a static
//    export, toggled by GITHUB_PAGES=true at build time. Pages serves a
//    project site at a /<repo-name>/ subpath, so basePath/assetPrefix must
//    match that repo's name - this only affects the GitHub Pages build.
const isGithubPagesExport = process.env.GITHUB_PAGES === 'true';
const repoName = 'CLAUDE-02-yield-mc-preview';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPagesExport ? 'export' : 'standalone',
  ...(isGithubPagesExport && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  images: {
    // The Next.js Image Optimization API needs a server - unavailable for a
    // static export, so pre-optimization is disabled for that build only.
    unoptimized: isGithubPagesExport,
  },
  reactStrictMode: true,
};

export default nextConfig;
