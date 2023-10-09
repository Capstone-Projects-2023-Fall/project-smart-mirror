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

The Smart Mirror project aims to develop an innovative and interactive mirror with embedded technology to enhance the daily lives of users. This mirror will serve as more than just a reflective surface; it will provide real-time information, personalized content, and an interactive user experience.
The Smart Mirror will incorporate features such as displaying the time, date, and weather forecast, as well as enabling users to access their calendar, news headlines, and fitness data. Users will have the option to customize the mirror's interface and choose from various widgets to display information relevant to their daily routine.
This project seeks to create a seamless integration of technology into the everyday routines of users, making their morning routines more efficient and keeping them informed throughout the day. It will utilize cutting-edge hardware and software to achieve its objectives, providing an elegant and functional addition to any modern home.

## High Level Requirement

At its foundation, Smart Mirror is a hardware-software hybrid stack. The mirror will need a Raspberry Pi and a display for basic widgets and miscellaneous information. Additionally, a PWA (progressive web app) will be linked to the user's mirror, allowing them to customize widgets, install new widgets, and enter information about themselves for the mirror to learn. The mirror will use computer vision to operate when the user enters a certain distance from the mirror. 

## Conceptual Design
The Smart Mirror and Companion App system is a unique combination of hardware and software that is designed to upgrade the concept of a mirror into an adaptable and interactive smart home device. Our Smart Mirror app integrates hardware, including a Raspberry Pi, two-way mirror, display panel, camera, and microphone, 
with a software stack featuring Python and Java. The mirror's functions are controlled by a custom application on the Raspberry Pi, 
which also enables user interactions. Voice recognition technology like Azure is integrated with voice commands. We incorporate the Open 
Weather API to display real-time weather information on the mirror, providing a seamless and user-friendly experience. In addition to this, 
we utilize Next.js for front-end development, creating a dynamic and responsive UI with real-time updates and interactive features.

## Background

Traditional mirrors serve a singular purpose: reflection. In contrast, the Smart Mirror project aims to transform this everyday object into a multifunctional, intelligent device. The concept of smart mirrors is not entirely new, with some commercial products available on the market, but these often come at a high cost and lack customization options.
The Smart Mirror project seeks to address these limitations by offering an affordable, open-source solution that can be tailored to individual preferences. By utilizing readily available components such as a two-way mirror, a high-resolution display, a Raspberry Pi, and various sensors, this project aims to create a cost-effective and accessible smart mirror.
The motivation behind this project is to provide users with a valuable addition to their homes that can streamline their daily routines and keep them informed. Whether it's checking the weather while getting dressed, reviewing their schedule before leaving the house, or receiving the latest news updates, the Smart Mirror aims to make these tasks effortless and integrated into the mirror itself.
By providing an open-source platform, this project also encourages further innovation in the field of smart mirrors, allowing developers and hobbyists to contribute to its growth and customization. In summary, the Smart Mirror project represents a fusion of technology and everyday life, enhancing user experiences and setting the stage for future advancements in smart home devices.

## Required Resources

Discuss what you need to develop this project. This includes background information you will need to acquire, hardware resources, and software resources. If these are not part of the standard Computer Science Department lab resources, these must be identified early and discussed with the instructor.

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
