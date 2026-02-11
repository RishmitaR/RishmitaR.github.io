---
layout: article
title:  Implementing Agents at the PLC
show_date: false
categories: project 
---

The [TAMU Physics Lab Center](https://plc.tamu.edu/) is responsible for setting up labs used in the physics ciriculum, building physics demonstrations, and for delivering physics demonstrations to physics professors. We currently have a website with all the physics demonstrations that can be ordered, but one big issue with our current ordering process is that unless a professor already havs a 
good understanding of what demonstrations are in the storeroom there are a lot of demos that never get ordered. This is because the categorization of demonstrations on our website is very broad. In order to help professors find the best demonstration for their lecture I am developing a CrewAI-powered multi-agent system that automates the end-to-end process of ordering a lecture. The diagram below explains the ideal flow of the final working system.

<p align-text="left">
  <img src="/assets/images/flow_updated.png" alt="Flow Chart" width="100%">
  <br>
  <em>Flowchart of Agents in Final Working Product</em>
</p>

This project is currently very WIP, I'd ideally like to turn this into a web application with a mock UI fed with real class syllabi before pitching this to my boss as something to implement on our live website. I also want to do more development on the live website <a href="/projects/project/2026/01/23/PLC_Website.html" target="_blank"> (read more about how I'm updating the PLC website here)</a> before introducing agents to the PLC - so for now the agents live in my local development space! 
