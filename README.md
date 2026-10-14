# CaseBridge — public scaffold

The public presentation layer of CaseBridge: basic UI components, a minimal layout, and distribution information. The complete implementation is maintained in a separate private repository.

## Included

- A React/TypeScript/Vite layout shell.
- PageHeader and SkeletonGrid presentation components.
- A small responsive light/dark stylesheet.
- Licensing and distribution notices.

## Kept private

Authentication, email verification/recovery, MFA, sessions, throttling, database schema, team/company rules, administration, audit persistence, and internal deployment configuration are not included here. This repository starts with a new history and does not import the private repository's commits or tags.

## Run this preview

Requires Node.js 22.12+.

~~~sh
npm ci
npm run dev
~~~

Build with npm run build. This is a static preview with no working account/domain features; it is not the complete application. See [distribution information](DISTRIBUTION.md) for application packages and requirements.

## Permissions

Original material published under the [CaseBridge Personal Use License](LICENSE) may be downloaded for personal, non-commercial use. Redistribution, commercial service use, and reuse in other products require separate permission. Preserve authorship and notices; do not claim the project as your own.

The two legacy presentation components retain their MIT permissions. Earlier full CaseBridge releases published under MIT retain their original grants. See [third-party and legacy notices](THIRD_PARTY_NOTICES.md).

GitHub repository permissions protect the owner's branches. They do not prevent people from downloading or editing local copies, and a public repository can be viewed/forked under GitHub's terms. Published browser code and distributed binaries cannot be promised to be unreadable.

Author: [ob1to-0](https://github.com/ob1to-0).
