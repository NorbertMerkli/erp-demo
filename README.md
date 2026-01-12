# ERP Demo Architecture

A monorepo foundation designed for scalability, maintainability, and high-performance developer experience.

## Architectural Principles

- **Centralized Governance**: Unified TypeScript and Biome configurations shared across all workspaces via internal packages.
- **Task Orchestration**: Leveraging Turborepo for optimized build pipelines and remote caching.
- **Strict Type Safety**: Maximum TypeScript strictness with zero-config inheritance.

## Tech Stack

- **Runtime & Package Management**: [Bun](https://bun.sh/)
- **Monorepo Management**: [Turborepo](https://turborepo.com/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)

## Repository Structure

- `packages/typescript-config`: Centralized TS templates for different environments.

## Usage

- **Installation**: `bun install`
- **Lint & Format**: `bun lint`
