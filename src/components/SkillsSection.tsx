import React, { useState } from 'react';
import { Layers, Terminal, Database, Cloud, Shield, Check, Cpu, Box, Copy, CheckCircle2, Code2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  darkMode: boolean;
}

const DOCKER_EXAMPLES = [
  {
    id: 'dockerfile',
    title: '1. Production Dockerfile for Laravel / PHP',
    filename: 'Dockerfile',
    description: 'Multi-stage production build packaging PHP 8, Composer dependencies, and OPcache into a minimal, secure container image.',
    code: `# Multi-stage lean production Dockerfile for PHP / Laravel
FROM php:8.2-fpm-alpine AS base

# Install system dependencies & PHP extensions
RUN apk add --no-cache libpng-dev libzip-dev oniguruma-dev curl \
    && docker-php-ext-install pdo pdo_mysql opcache bcmath zip

WORKDIR /var/www/html

# Multi-stage dependency installation via Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --prefer-dist --optimize-autoloader

# Copy application source and set minimal permissions
COPY . .
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]`
  },
  {
    id: 'compose',
    title: '2. Multi-Service Environment (Docker Compose)',
    filename: 'docker-compose.yml',
    description: 'Orchestrates the Laravel application, MySQL/Oracle database container, and Nginx reverse proxy for isolated local development and testing.',
    code: `version: '3.8'

services:
  # Laravel App Container
  app:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/var/www/html
    environment:
      DB_HOST: mysql_db
      DB_DATABASE: banking_app
    networks:
      - internal_net

  # Database Service
  mysql_db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret_root_pass
      MYSQL_DATABASE: banking_app
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - internal_net

  # Web Server Proxy
  webserver:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - .:/var/www/html
      - ./docker/nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - app
    networks:
      - internal_net

networks:
  internal_net:
    driver: bridge

volumes:
  db_data:`
  },
  {
    id: 'cicd',
    title: '3. Automated Container Build & Postman API Tests',
    filename: '.github/workflows/ci-cd.yml',
    description: 'Automates Docker image build on every commit and runs automated Postman Newman API collections against the containerized endpoints.',
    code: `name: Build & Test Banking API
on: [push, pull_request]

jobs:
  docker-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # 1. Build and boot application containers
      - name: Build and launch Docker Compose stack
        run: docker compose up -d --build

      # 2. Run automated Postman test collections with Newman
      - name: Run Postman REST API Test Suite
        run: |
          npm install -g newman
          newman run tests/postman/banking_api.json \\
            --environment tests/postman/docker_env.json \\
            --reporters cli,json

      # 3. Clean up container resources
      - name: Tear down containers
        if: always()
        run: docker compose down`
  }
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [activeDockerExample, setActiveDockerExample] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4" />;
      case 1:
        return <Box className="w-4 h-4" />;
      case 2:
        return <Cloud className="w-4 h-4" />;
      case 3:
        return <Database className="w-4 h-4" />;
      case 4:
        return <Layers className="w-4 h-4" />;
      case 5:
        return <Terminal className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Core Tech Stack & Tools
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Skills and enterprise tooling categorized according to official experience and certifications.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className={`p-8 rounded-2xl border transition-all ${
          darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                {getCategoryIcon(selectedCategory)}
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {SKILL_CATEGORIES[selectedCategory].category}
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-400">
              {SKILL_CATEGORIES[selectedCategory].skills.length} core items
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {skill.name}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                    darkMode ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-blue-700'
                  }`}>
                    {skill.badge}
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-800/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Docker Examples (Direct user request: "few explame dorker") */}
        <div className="mt-14">
          <div className={`p-6 sm:p-8 rounded-2xl border ${
            darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/60 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-2">
                  <Box className="w-3.5 h-3.5" />
                  <span>DOCKER & DEVOPS IN PRACTICE</span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Docker Practical Examples
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Real-world containerization patterns applied in enterprise Laravel backends and CI/CD pipelines.
                </p>
              </div>

              {/* Certified Badge */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono shrink-0 ${
                darkMode ? 'bg-slate-950 border-cyan-900 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Certified DevOps Engineer</span>
              </div>
            </div>

            {/* Docker Example Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
              {DOCKER_EXAMPLES.map((ex, idx) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveDockerExample(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    activeDockerExample === idx
                      ? darkMode
                        ? 'bg-cyan-950/40 border-cyan-700 text-white shadow-sm'
                        : 'bg-blue-50 border-blue-300 text-blue-900'
                      : darkMode
                      ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm mb-1">{ex.title}</div>
                  <div className="font-mono text-[11px] text-cyan-400 opacity-90">{ex.filename}</div>
                </button>
              ))}
            </div>

            {/* Active Docker Example Code Viewer */}
            <div className={`rounded-xl border overflow-hidden ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-700 text-slate-100'
            }`}>
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-mono text-slate-300">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>{DOCKER_EXAMPLES[activeDockerExample].filename}</span>
                </div>
                <button
                  onClick={() => handleCopyCode(DOCKER_EXAMPLES[activeDockerExample].code, activeDockerExample)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
                >
                  {copiedIndex === activeDockerExample ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 overflow-x-auto font-mono text-xs text-cyan-200 leading-relaxed max-h-96">
                <pre>{DOCKER_EXAMPLES[activeDockerExample].code}</pre>
              </div>

              <div className={`px-4 py-3 border-t text-xs ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}>
                <span className="font-semibold text-cyan-400">Practical Note: </span>
                {DOCKER_EXAMPLES[activeDockerExample].description}
              </div>
            </div>
          </div>
        </div>

        {/* Global Tech Pills Wall */}
        <div className="mt-12 text-center">
          <p className={`text-xs font-mono tracking-wider uppercase mb-4 ${
            darkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            TECHNOLOGIES FROM OFFICIAL CV
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              'Laravel', 'PHP (OOP)', 'Vue.js', 'React.js', '.NET & ASP.NET', 'Django CMS', 
              'MySQL', 'Oracle Database', 'Docker', 'Git & GitHub', 'Postman', 'REST APIs', 
              'Jasper Reports Server', 'Meta Report Server', 'PDF/Excel Reporting',
              'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AJAX', 'Banking Application SDLC'
            ].map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-blue-600 shadow-xs'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
