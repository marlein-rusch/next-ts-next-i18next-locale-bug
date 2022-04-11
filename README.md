## Goal of this repo

This repository was set up to show that the count/plural functionality does not work for locales with underscore, and not for en150 either.

To test this:
- Run the dev server:
```bash
npm run dev
# or
yarn dev
```
- Go to http://localhost:3000/[some-locale] (e.g. http://localhost:3000/en_US)
    - Expected behavior for en-150, en-US and en
    - Unexpected behavior for en_US, en150
- Observed behavior for en_US and en150:
    - Normal and interpolated i18n values (index.tsx line 16 - 22) work as expected (values come from common.json files)
    - Trans components with a count attribute do NOT work as expected (they fall back to the default values in the JSX file)
