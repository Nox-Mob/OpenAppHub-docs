// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// One tab ("topic") per app. Each tab has its own sidebar, built from the
// folders under src/content/docs/<app>/. Page order inside a folder comes from
// `sidebar.order` in each page's frontmatter.
const group = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

export default defineConfig({
  site: 'https://docs.openapphub.org',
  integrations: [
    starlight({
      title: 'OpenAppHub Docs',
      description:
        'Help for OpenAppHub and its apps: OpenCharterApp, OpenBoardApp and OpenLedgerApp.',
      logo: { src: './src/assets/logo.svg', alt: 'OpenAppHub' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      editLink: { baseUrl: 'https://github.com/Nox-Mob/OpenAppHub-Docs/edit/main/' },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Nox-Mob' },
        { icon: 'email', label: 'Support', href: 'mailto:support@openapphub.org' },
      ],
      plugins: [
        starlightSidebarTopics(
          [
            {
              label: 'OpenAppHub',
              link: '/hub/',
              icon: 'puzzle',
              items: [
                group('Start here', 'hub/start'),
                group('Accounts and access', 'hub/accounts'),
                group('Hosting and plans', 'hub/hosting'),
                group('Your data', 'hub/data'),
                group('Help', 'hub/help'),
              ],
            },
            {
              label: 'OpenCharterApp',
              link: '/charter/',
              icon: 'open-book',
              items: [
                group('Start here', 'charter/start'),
                group('Set up your organization', 'charter/setup'),
                group('Membership and dues', 'charter/membership'),
                group('Members', 'charter/members'),
                group('Money', 'charter/money'),
                group('Board and governance', 'charter/governance'),
                group('Records and reports', 'charter/records'),
                group('Help', 'charter/help'),
              ],
            },
            {
              label: 'OpenBoardApp',
              link: '/board/',
              icon: 'comment',
              items: [
                group('Start here', 'board/start'),
                group('People and roles', 'board/people'),
                group('Meetings', 'board/meetings'),
                group('Voting', 'board/voting'),
                group('Records and documents', 'board/records'),
                group('Help', 'board/help'),
              ],
            },
            {
              label: 'OpenLedgerApp',
              link: '/ledger/',
              icon: 'document',
              items: [
                group('Start here', 'ledger/start'),
                group('Everyday bookkeeping', 'ledger/everyday'),
                group('Nonprofit features', 'ledger/nonprofit'),
                group('Reports and closing', 'ledger/reports'),
                group('People, security and data', 'ledger/admin'),
                group('Help', 'ledger/help'),
              ],
            },
          ],
          { exclude: ['/', '/404'] },
        ),
      ],
    }),
  ],
});
