import * as React from 'react';

export interface SkillGraphAxis { label: string; value: number; }
/** A radar chart, one score per skill on 3–8 axes (legacy palette). */
export interface SkillGraphProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'fill' | 'max'> {
  axes: SkillGraphAxis[];
  /** Default 100. */
  max?: number;
  /** Default 5. */
  rings?: number;
  /** 'default' 533x480, 'mobile' 360x312, 'mini' 166 with no text. */
  size?: 'default' | 'mobile' | 'mini';
  tone?: 'default' | 'dark';
  grid?: 'polygon' | 'circle';
  spokes?: boolean;
  /** true 80% fill, false 30%. */
  fill?: boolean;
  /** Second series, same axis order. */
  compare?: number[];
  state?: string;
}
export function SkillGraph(props: SkillGraphProps): JSX.Element;
