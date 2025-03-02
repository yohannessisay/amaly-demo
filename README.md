# Next.js + TanStack Query Coding Challenge

## Objective

The goal of this challenge is to demonstrate the ability to set up a Next.js project, implement API routes, manage data using TanStack React Query, and persist data in local storage. The application interacts with the Rick and Morty API to retrieve and store character information.

## Features

### 1. **Character List Page (/characters)**

- Fetches and displays a list of characters from the Rick and Morty API.
- Uses **TanStack React Query** to manage the API request.
- The character list is displayed in a grid or flexbox layout with:
  - Name
  - Status (Alive, Dead, Unknown)
  - Species
  - Image
  - Colored badges for status (🟢 Alive, 🔴 Dead, ⚪ Unknown)
- Responsive layout that works well on both mobile and desktop.
- Integrates **local storage** to persist characters manually added through the "Create Character" page.

### 2. **Create Character Page (/create-character)**

- A form for manually adding a new character with the following fields:
  - Name
  - Status
  - Species
  - Image URL
- The new character is saved to **local storage** and will persist after page reloads.
- After saving the new character, the user is redirected back to the **Character List Page** where the new character is visible.

### 3. **Persistence**

- Manually added characters are stored in **local storage**.
- The application combines results from the Rick and Morty API and the locally stored characters to display them in the character list.

### 4. **Additional Enhancements**

- **Infinite scrolling or pagination** for the character list.
- Ability to **delete** locally saved characters from the list.

## Technologies Used

- **Next.js** - React framework for building server-side rendered applications.
- **TanStack React Query** - Data-fetching library to manage API requests.
- **TypeScript** - Typed superset of JavaScript for better development experience.
- **Local Storage** - Used to persist characters added manually by users.

## Getting Started

### Prerequisites

To run this project locally, you need to have **Node.js** and **npm** installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextjs-tanstack-query-coding-challenge.git
   cd nextjs-tanstack-query-coding-challenge
   ```
