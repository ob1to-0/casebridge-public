# Application distribution

This repository contains a public UI scaffold only. Application distribution is being separated from the private core; no hosted API endpoint is configured here.

The application requires an API for accounts, teams, companies and administration. A downloaded UI alone cannot provide those features. Server-hosted core code is not sent to clients. A locally distributed Java backend can be decompiled, and browser JavaScript can be inspected/modified; packaging is not a technical copy-protection mechanism.

Only explicitly approved application packages will be attached to public releases. The core repository's Git history, backend source, database migrations, operational configuration and backend binaries are excluded by default.

Earlier CaseBridge 1.0.0 and 1.1.0 distributions carried MIT terms. Those grants remain valid; new distribution restrictions do not retroactively cancel them.
