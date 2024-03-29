import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BadgeComponent } from '../../shared/badge/badge.component';
import { CvBlockAppearenceComponent } from '../cv-block-appearence/cv-block-appearence.component';

import { ICertificate } from './icertificate';

@Component({
  selector: 'app-certificates-block',
  standalone: true,
  templateUrl: './certificates-block.component.html',
  styleUrls: ['./certificates-block.component.scss', '../main-page.component.scss'],
  imports: [CommonModule, CvBlockAppearenceComponent, BadgeComponent],
})
export class CertificatesBlockComponent {
  certificates = input.required<ICertificate[]>();

  size = input.required<string>();
}
