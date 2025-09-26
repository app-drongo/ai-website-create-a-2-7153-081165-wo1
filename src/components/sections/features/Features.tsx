'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description:
        'Intelligent workflow automation that reduces manual tasks by 85% and accelerates business processes.',
      badge: 'AI Technology',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'SOC 2 Type II compliant with 256-bit encryption, multi-factor authentication, and advanced threat detection.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Cloud-Native Architecture',
      description:
        'Built for scale with microservices architecture, auto-scaling, and 99.99% uptime guarantee.',
      badge: 'Infrastructure',
    },
    {
      icon: Globe,
      title: 'Global API Network',
      description:
        'Lightning-fast API responses with <50ms latency across 15+ global regions and edge locations.',
      badge: 'Performance',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Advanced business intelligence with predictive insights, custom dashboards, and automated reporting.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Solutions',
      description:
        'Complete customization with your branding, custom domains, and tailored user experiences.',
      badge: 'Customization',
    },
    {
      icon: Code2,
      title: 'Developer-First Platform',
      description:
        'RESTful APIs, GraphQL endpoints, webhooks, and comprehensive SDKs for seamless integration.',
      badge: 'Integration',
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description:
        'Dedicated success managers, priority support queue, and expert onboarding for enterprise clients.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      description:
        'GDPR compliant with data residency options, zero-knowledge architecture, and complete data control.',
      badge: 'Compliance',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise SaaS Platform
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Scale & Innovation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acme SaaS delivers cutting-edge technology solutions that empower SMBs to compete at
            enterprise level with AI-driven automation, robust security, and seamless scalability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="size-6 text-primary group-hover:text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-secondary/50 text-secondary-foreground"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/30 transition-colors duration-300" />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">10x</div>
            <div className="text-sm text-muted-foreground">Faster Deployment</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99.99%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50ms</div>
            <div className="text-sm text-muted-foreground">API Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Task Automation</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 10,000+ businesses already using Acme SaaS to streamline operations, boost
            productivity, and accelerate growth with enterprise-grade technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Start 14-Day Trial
            </button>
            <button
              onClick={handleViewDemo}
              className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent hover:border-primary/30 transition-all duration-300"
            >
              Watch Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
