import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BadgeComponent } from '../../shared/badge/badge.component';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

@Component({
  selector: 'app-skills-block',
  standalone: true,
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class SkillsBlockComponent {
  skills = input.required<string[]>();

  size = input.required<string>();
}
