# 🧭 Digital Salary Compass - Project Insights

## 🏗️ Technical Architecture

This project is built using a modern and robust technology stack designed for performance and developer experience:

-   **Core Framework**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) for a type-safe, component-based UI.
-   **Build Tool**: [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized builds.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive design.
-   **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent iconography.

## 📂 Data Structure

The application's logic is driven by structured data to ensure accurate salary estimations:

### `src/data`
-   **`locations/`**: Contains data specific to different geographical markets.
-   **`specializations/`**: Defines various digital marketing roles and their associated salary baselines.
-   **`locations.ts` & `specializations.ts`**: Aggregates and exports the data for consumption by the application.

## 🧮 Core Logic

### Salary Calculation
The estimation engine (`src/utils/salaryCalculator.ts`) processes user inputs:
-   **Experience Level**: Adjusts the baseline based on years of experience.
-   **Location**: Applies geographical cost-of-living and market demand factors.
-   **Specialization**: Accounts for the specific niche within digital marketing.

## 🚀 Future Roadmap

-   **Enhanced Analytics**: Visual charts for salary trends.
-   **More Roles**: Expanding beyond digital marketing.
-   **Community Features**: User-submitted salary data for crowdsourced accuracy.
