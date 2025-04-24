# Documenting Guide

    Follow the following documentation structure. Also, if there is already existing document guide. Update that unless specified otherwise
    - architecture/hld
    - architecture/lld
    - brainstorm
    - implementation_plans
        - feat_<feature_name>
        - bug_<bug_name>

# Components Folder Structure.

    We will create all the reusable components inside src/components folder. There are only fixed types of components- ui, widgets, blocks, fragments
    - components:
        - ui : These are primitives as per the shadcn. Basic building blocks which are project independant, basic building blocks of all our components.
        - blocks: These are more complicated reusable components for example, DashboardLayout, HeroSection, FeatureSection, etc. These are also project independant, which appropriate configuration and props exposed to the parent.
    - widgets: These are more advanced components with fixed state management, logic and so on. For example, ImageEditor, AudioPlayer, etc. Which can also be independant of the project and they expose appropriate methods to the parent.
    - fragments: These are reusable fragment of a module, which are reusable accross different modules or pages. These aren't project independant. These are specific to our current project with deep integration between schemas, data structures, api calls, and so on.
    - modules: These are independant, isolation of the application. Higher level of abstraction than the fragments. For example - auth, chat, billing, etc.
