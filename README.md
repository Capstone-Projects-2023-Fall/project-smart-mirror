[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11815935)
<div align="center">

# Smart Mirror
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/SM/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-fall.github.io/project-smart-mirror/)


</div>


## Keywords
Section 003, hardware, web application, Raspberry PI, TypeScript, HTML/CSS, Java

## Project Abstract
Traditional mirrors serve a singular purpose: reflecting our physical appearances. However, they remain underutilized in providing value beyond this basic function. In an increasingly connected world, individuals seek efficient and personalized ways to access information and streamline their daily routines. The absence of smart, interactive mirrors in our homes represents an untapped potential for enhancing daily life. As a solution, such mirrors already exist.

However, many of these mirrors lack usability for non-tech-savvy individuals. The Smart Mirror project aims to develop an innovative and interactive mirror that focuses on ease of use and simplicity with embedded technology, integrating seamlessly into the lives of users. Smart Mirror will provide real-time information, personalized content, and an interactive user experience. It will display not only the time, date, and weather forecast but also enable users to access their calendars, check news headlines, monitor their fitness data, and many other modules.

Furthermore, the Smart Mirror will offer customization options, allowing users to tailor its interface and choose from various widgets to display information relevant to their unique routines. By leveraging cutting-edge hardware and software, this project will create a functional and elegant addition to modern homes. Smart Mirror project seeks to bridge the gap between traditional mirrors and the digital age, addressing the need for efficient and personalized information access in our daily lives.

## High Level Requirement
At its foundation, Smart Mirror is a hardware-software hybrid stack. The mirror will need a Raspberry Pi and a display for basic widgets and miscellaneous information. Additionally, a PWA (progressive web app) will be linked to the user's mirror, allowing them to customize widgets, install new widgets, and enter information about themselves for the mirror to learn. The mirror will use computer vision to operate when the user enters a certain distance from the mirror. 

## Conceptual Design
The Smart Mirror and Companion App system is a unique combination of hardware and software that is designed to upgrade the concept of a mirror into an adaptable and interactive smart home device. Our Smart Mirror app integrates hardware, including a Raspberry Pi, two-way mirror, display panel, camera, and microphone, 
with a software stack featuring Python and Java. The mirror's functions are controlled by a custom application on the Raspberry Pi, 
which also enables user interactions. Voice recognition technology like Azure is integrated with voice commands. We incorporate the Open 
Weather API to display real-time weather information on the mirror, providing a seamless and user-friendly experience. In addition to this, 
we utilize Next.js for front-end development, creating a dynamic and responsive UI with real-time updates and interactive features.

## Background
The Smart Mirror project is similar to other tools such as [MagicMirror](https://docs.magicmirror.builders/). These tools are tedious and difficult to set up for users who are not tech-savvy. Because of this, Smart Mirror aims to build on top of other projects, by including an in-built functional "app store" in the companion PWA (progressive web app) to install open-source modules with the tap of a button. Smart Mirror aims to differentiate itself through its ease of use.

## Required Resources
- Raspberry Pi
- Display
- Two-Way Mirror
- Next.js
- Python
- Possible use of ScyllaDB

## [SmartMirror](https://capstone-projects-2023-fall.github.io/project-smart-mirror/) GitHub Stats

### Number of opened pull requests made by each team member

![SmartMirror pull requests](https://courses.ianapplebaum.com/api/pull-requests/Capstone-Projects-2023-Fall/project-smart-mirror)

### Number of code reviews made by each team member

![SmartMirror reviews](https://courses.ianapplebaum.com/api/reviews/Capstone-Projects-2023-Fall/project-smart-mirror)

### Number of commits made by each team member

![SmartMirror commits](https://courses.ianapplebaum.com/api/commits/Capstone-Projects-2023-Fall/project-smart-mirror)

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/devinrankin">
            <img src="https://avatars.githubusercontent.com/u/103450760?v=4" width="100;" alt="devinrankin"/>
            <br />
            <sub><b>Devin Rankin</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/All-Sait">
            <img src="https://avatars.githubusercontent.com/u/25727936?v=4" width="100;" alt="All-Sait"/>
            <br />
            <sub><b>Charles Lyde</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/MWilcox35">
            <img src="https://avatars.githubusercontent.com/u/123747098?v=4" width="100;" alt="MWilcox35"/>
            <br />
            <sub><b>Michael Wilcox</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mars123123">
            <img src="https://avatars.githubusercontent.com/u/70285068?v=4" width="100;" alt="mars123123"/>
            <br />
            <sub><b>Marcel Millan</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tonytran40">
            <img src="https://avatars.githubusercontent.com/u/74268497?v=4" width="100;" alt="tonytran40"/>
            <br />
            <sub><b>Tony Tran</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/gregory-shakarjian">
            <img src="https://avatars.githubusercontent.com/u/112418620?v=4" width="100;" alt="gregory-shakarjian"/>
            <br />
            <sub><b>Gregory Shakarjian</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/rifat123-r">
            <img src="https://avatars.githubusercontent.com/u/73204434?v=4" width="100;" alt="rifat123-r"/>
            <br />
            <sub><b>Main Rifat</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )
