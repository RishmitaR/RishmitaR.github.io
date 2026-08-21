---
layout: article
title:  Google Summer of Code 2026
categories: blog
tags: 
    - blog 
    - Google Summer of Code
    - Open Source
    - Astrophysics
    - TardisRT
    - PyTest
---

This summer I worked with the <a href="https://tardis-sn.github.io/" target="_blank" rel="noopener noreferrer">TARDIS RT collaboration</a> through Google Summer of Code on improving the test coverage of the TARDIS plasma module. This post is a writeup of what the project was!

## What is TARDIS

TARDIS RT is an open-science software package that simulates and analyzes supernovae and other transients using a Monte Carlo radiative transfer framework. The collaboration as a whole works on Type Ia progenitor problems, nucleosynthesis in neutron star mergers, progenitors of stripped core-collapse supernovae, and cosmology using Type IIP supernovae. Data from current and next-generation telescopes and surveys gets used by the TARDIS RT framework to answer those scientific questions.

## The goals of the project

The plasma module determines the ionization and excitation states of the supernova ejecta from the basic structure of the supernova - elemental abundances, densities, and radiation temperature. CodeCov, which is what TARDIS uses to track code coverage, does not accurately report coverage of the plasma. The plasma is passed as a parameter into models and simulations, so it's indirectly covered in tests of entire simulations. CodeCov marks those lines as "covered," but nothing is actually asserting that a given plasma property computes the right value. While some parts of the module did have direct tests, most of the module lacked direct tests that were easy to find. So the project had two goals: increase real test coverage of the plasma module, and make the tests that do exist easy to find and read.

## What I did

The work split into two halves that fed each other: writing direct unit and regression tests for plasma properties, and mapping out the plasma module so that anyone could tell which parts of it are actually worth testing.

On the testing side, I wrote direct tests for the dilute Planckian radiation field, the radiative rates solver, and the basic plasma properties. For the basic properties I also set up a new `tardis/plasma/properties/tests/` package with its own `conftest.py`. Every regression test needed matching reference data, so a good chunk of the work included generating data and pushing it to the separate `tardis-regression-data` repo.

The second half was the part I didn't anticipate spending as much time on, and it ended up being the more valuable deliverable. I wrote <a href="/assets/docs/tardis-plasma-module-documentation.pdf" target="_blank" rel="noopener noreferrer"> detailed documentation about the plasma module</a> which covered:

- How the plasma is structured as a graph.
- How the plasma gets assembled.
- A class-by-class audit of every plasma property.

To do this write up I leaned heavily on the VSCode test coverage tool. I ran only the plasma tests and then clicked into each class in the legacy property collection file of the plasma module (a file that essentially listed all the plasma properties into easy to import collections) to see whether the body of its `calculate` method lit up. This turned out to be the most reliable way to tell whether a property was used by the Tardis package or was simply being imported and unused. 

## The current state

There are now direct tests for the basic plasma properties, the dilute Planckian radiation field, and the radiative rates solver along with necessary reference data.

The documentation now shows exactly which parts of the plasma module are dead code, that either need to be refactored out of the codebase or be implemented into the codebase. Writing tests for these parts of the plasma module in its current state would be a waste of time.


I wrote all of this up as a standalone plasma module document that exists in the Tardis Google Drive, and this document will eventually be the basis for proper plasma documentation. The full thing is embedded below, and you can also <a href="/assets/docs/tardis-plasma-module-documentation.pdf" target="_blank" rel="noopener noreferrer">open it in a new tab</a> if the viewer doesn't load. The document shows the complete property-by-property analysis. 

<div style="text-align: center;">
  <object data="/assets/docs/tardis-plasma-module-documentation.pdf" type="application/pdf" width="100%" height="800px">
    <iframe src="/assets/docs/tardis-plasma-module-documentation.pdf" width="100%" height="800px" style="border: none;">
      Your browser can't display embedded PDFs. <a href="/assets/docs/tardis-plasma-module-documentation.pdf" target="_blank" rel="noopener noreferrer">Download the TARDIS plasma module documentation here.</a>
    </iframe>
  </object>
  <br>
  <em>The TARDIS Plasma Module documentation</em>
</div>

## What's left to do

The most immediate gap is that TARDIS still has no published plasma documentation. The "how to create a plasma graph" docs page links to a Plasma Documentation page that doesn't exist, which I filed as <a href="https://github.com/tardis-sn/tardis/issues/3645" target="_blank" rel="noopener noreferrer">issue #3645</a>. The document I wrote is meant to be the basis for that page.

Beyond that, the uncovered unreferenced code should come out of master. My suggestion, which could be a potential future GSOC project, is to remove dead code from the Master branch and reintroduce the code back into the Master branch in smaller PRs where the new plasma properties have example notebooks and example config files. A more ambitious approach is to fully refactor away from the NetworkX graph structure and toward solvers (a refactor process that's halfway done that exists in the main codebase), which would need real design work with the core Tardis team first. 


## What got merged upstream

Four PRs were pushed onto the TARDIS master:

| PR | What it does |
| --- | --- |
| <a href="https://github.com/tardis-sn/tardis/pull/3546" target="_blank" rel="noopener noreferrer">#3546</a> | Fixes the how-to-plasma-graph docs page, which was showing broken-image errors instead of the plasma graphs |
| <a href="https://github.com/tardis-sn/tardis/pull/3586" target="_blank" rel="noopener noreferrer">#3586</a> | Adds `test_radiative_rates.py` and test cases that confirm the asserts actually trigger |
| <a href="https://github.com/tardis-sn/tardis/pull/3606" target="_blank" rel="noopener noreferrer">#3606</a> | Adds the `plasma/properties/tests` package: unit tests for the basic properties plus the reusable `conftest.py` |
| <a href="https://github.com/tardis-sn/tardis/pull/3585" target="_blank" rel="noopener noreferrer">#3585</a> | Adds direct tests for the dilute Planckian radiation field |


Four regression data PRs also merged into `tardis-regression-data`: <a href="https://github.com/tardis-sn/tardis-regression-data/pull/95" target="_blank" rel="noopener noreferrer">#95</a> (fixing atom data attributes that regression tests couldn't read), <a href="https://github.com/tardis-sn/tardis-regression-data/pull/96" target="_blank" rel="noopener noreferrer">#96</a>, <a href="https://github.com/tardis-sn/tardis-regression-data/pull/98" target="_blank" rel="noopener noreferrer">#98</a>, and <a href="https://github.com/tardis-sn/tardis-regression-data/pull/101" target="_blank" rel="noopener noreferrer">#101</a>, each carrying the reference data for the corresponding test PR.

Not everything made it to Master, and I think the ones that didn't are worth writing down too.

<a href="https://github.com/tardis-sn/tardis/pull/3622" target="_blank" rel="noopener noreferrer">#3622</a> was closed unmerged in August. It rewrote `test_complete_plasmas.py` so that instead of checking whether a property exists as a key in the stored HDF5 file, the test checks whether the plasma object actually has the attribute. The old behavior is opaque — when a test is skipped you can't tell whether the plasma genuinely lacks the property or whether the regression data is just being read wrong. The PR also emitted an explicit warning when a property goes missing, moved every test onto the regression data sync functions instead of raw `pd.read_hdf`, and dropped properties from the combined list that were being skipped every single time because no plasma has them. It had test failures I didn't get fixed in time, and the maintainers closed it with a note that it can be reopened. Its companion regression data PR, <a href="https://github.com/tardis-sn/tardis-regression-data/pull/102" target="_blank" rel="noopener noreferrer">#102</a>, is still open.

## Challenges and what I learned

One of my biggest challenges throughout this project was navigating a new codebase and writing tests for it. The first tests I wrote were really redundant and unintentionally introduced a lot of code duplication. I eventually got the hang of how to write meaningful tests. Another testing challenge was finding out which covered lines truly had direct tests and which ones were being indirectly tested. I learned a lot about code coverage, documenting the outputs of pytests, and also how to step into the stack of a pytest to analyze the exact properties of a test. Throughout this whole process though, I did come to realize that when I dive into a new big codebase in the future, understanding the existing tests and coverage while simultaneously looking at code examples and documentation is a great way to understand a codebase in depth. 

I also learned a lot about version control and how to properly use git when working on a large collaborative project. I had to really get into the practice of consistently pulling from main, stashing and popping changes when necessary, creating new branches per feature, and quadruple checking that my PRs only had relevant code. In the early stages of development, I pushed a lot of messy PRs with weird white space diffs, files from merges I did with branches on my own local development, and changes I accidentally pushed into one PR that should have existed solely on another PR. 


## Conclusion

Working with Tardis for GSoC was incredible! I absolutely loved the Tardis community. On top of learning how to develop open source code for science, I learned about a wide variety of topics in scientific computing, got to refresh some of my astrophysics knowledge from undergrad, and I learned a lot about how cool supernovae are. Any questions I had about either the codebase or the science were answered basically immediately on Slack, and I felt like I jumped straight into the community doing really important work by getting to work with a fellow GSoC contributor on unpinning the Tardis environment. Overall, this GSoC 2026 was such a meaningful experience that I've learnt so much from.




