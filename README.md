# ts-dead-exports
The solution to checking for dead TS (TypeScript) exports by an all repo.

## Analyzed Solutions

The author has analyzed the following solutions before the solution creation:
1. https://www.npmjs.com/package/ts-unused-exports;
1. https://www.npmjs.com/package/ts-prune;
1. https://www.npmjs.com/package/tsr;
1. "Unused Exports…" (VS Code plugin).

The main minuses of solutions above:
1. redundant information in a report;
1. ignoring types using as name spaces part.

## Realized and Planned Features
1. (DONE) searching by one module.
1. (DONE) searching by one type.
1. (DONE) modules written in TSX support.
1. (DONE) finding using types without name spaces.
1. Finding using types with name spaces.
1. Searching by few modules.
1. Searching by few types.
1. Modules written in TS support.
1. Output by all paths with dead types.
1. Output by all dead types with its names.