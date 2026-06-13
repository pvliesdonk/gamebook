# Contributing

Thanks for your interest in the *Field Guide to Narrative & Game Design*.

This repository is private for now, and outside contributions are not actively
solicited. This document exists so that **if** a contribution is ever offered,
the terms are already clear and the work can be accepted cleanly rather than
living on a fork. If you are reading this as an outside contributor, you are
welcome, and the rules below are short.

## What the project is

The repository is content-first. The work is the guide: the articles, primers,
keys, exemplars and specimens under `content/`, plus the editorial material under
`docs/` and `research/`. Everything else (the `scripts/`, `filters/`, `partials/`
and `templates/` directories and the Quarto/build configuration) is scaffolding
that renders the work. See [`LICENSE`](LICENSE) and [`LICENSE-CODE`](LICENSE-CODE)
for how each is licensed.

## How to contribute

1. **Open an issue first** for anything beyond a typo, so the change can be
   discussed before you spend effort on it. Every pull request should reference
   at least one issue.
2. **Follow the project conventions.** They are not optional, because they are
   what keeps the guide coherent:
   - Editorial voice and structure: `docs/style-guide.md` and the phase pattern
     locks in `docs/`.
   - Canonical mechanism names: `docs/term-registry.md`.
   - **Provenance.** Every claim in finished prose carries a `[corpus]`,
     `[researched]`, or `[synthesis]` tag, and every factual claim resolves to a
     real external source in a `## Sources` section. The research vault is never
     cited as a source.
   - House style is enforced by Vale and markdownlint (`pre-commit install`).
     Notably: en-GB spelling, metric units, the 24-hour clock, and **no
     em-dashes**.
3. **Keep the build green.** `quarto render` must produce the HTML and the Typst
   PDF without errors, and `vale content/` must be clean.
4. **One logical change per commit**, referencing the issue number.

## Contributor Licence Agreement (CLA)

To keep the guide freely licensable as a single coherent work, every contribution
is made under the agreement below. **By submitting a contribution to this
repository (a pull request, a patch, or any other form), you agree to these
terms.** To make your agreement explicit, add a `Signed-off-by: Your Name
<your@email>` line to each commit (for example with `git commit -s`).

In this agreement, "the Maintainer" is Peter van Liesdonk, the copyright holder
and compiler of the work; "You" is the individual or entity submitting a
contribution; and "Contribution" is any original work of authorship you
intentionally submit for inclusion in this repository.

1. **You keep your copyright.** This agreement does not transfer ownership of
   your Contribution to the Maintainer. You retain all rights, title and interest
   in it.

2. **Licence grant.** You grant the Maintainer a perpetual, worldwide,
   non-exclusive, royalty-free, irrevocable licence to reproduce, prepare
   derivative works of, publicly display, publicly perform, sublicense, and
   distribute your Contribution and such derivative works.

3. **Right to relicense.** That licence expressly includes the right for the
   Maintainer to license and **relicense** your Contribution, and the combined
   work that incorporates it, under terms of the Maintainer's choosing. This may
   include licences other than the project's current ones, so that the Maintainer
   can, for example, publish or commercially distribute the compiled guide even
   though the public licence carries a NonCommercial term. The Maintainer is not
   obliged to use your Contribution under any particular licence.

4. **Inbound licence.** Absent any relicensing by the Maintainer, your
   Contribution is licensed to the public under the same licence as the part of
   the repository it joins: CC BY-NC 4.0 for content, the MIT licence for build
   scaffolding (see `LICENSE` and `LICENSE-CODE`).

5. **Patent grant.** You grant the Maintainer and recipients of the work a
   perpetual, worldwide, non-exclusive, royalty-free, irrevocable patent licence
   to make, use, sell, offer to sell, import and otherwise transfer your
   Contribution, where such a licence applies only to patent claims you can
   license that are necessarily infringed by your Contribution alone.

6. **Your representations.** You represent that each Contribution is your original
   creation and that you are legally entitled to grant the above licences. If your
   employer has rights to intellectual property you create, you represent that you
   have permission to make the Contribution, or that your employer has waived such
   rights. Where a Contribution includes or is based on third-party material, you
   will identify it and the licence it carries, and you will only submit material
   you have the right to submit.

7. **No obligation.** The Maintainer is under no obligation to accept, merge, or
   keep any Contribution.

8. **As is.** Unless required by law or agreed in writing, you provide your
   Contribution on an "AS IS" basis, without warranties or conditions of any kind.

This agreement is governed by the law of the Netherlands, without regard to its
conflict-of-laws rules.
