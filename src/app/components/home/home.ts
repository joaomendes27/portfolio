import { Component, AfterViewInit } from '@angular/core';
import { Experience } from '../experience/experience';
import { TEXTS } from '../../texts/texts';
import { LanguageService } from '../../services/languageService';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

@Component({
  selector: 'app-home',
  imports: [Experience],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements AfterViewInit {
  lang: 'pt' | 'en' = 'pt';
  texts = TEXTS;

  constructor(private languageService: LanguageService) {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  ngAfterViewInit() {
    this.initParticles();
  }

  private initParticles(): void {
    const canvas = document.getElementById(
      'home-particles-canvas'
    ) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(document.body);

    window.addEventListener('resize', resizeCanvas);

    const PARTICLE_COUNT = 60;
    let width = canvas.width;
    let height = canvas.height;

    const particles: Particle[] = Array.from(
      { length: PARTICLE_COUNT },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: 1.5 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.4,
      })
    );

    const animate = () => {
      width = canvas.width;
      height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        this.drawParticle(ctx, p);
        this.updateParticle(p, width, height);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }

  private drawParticle(ctx: CanvasRenderingContext2D, p: Particle): void {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#969696ff';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
  }

  private updateParticle(p: Particle, width: number, height: number): void {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }
}
