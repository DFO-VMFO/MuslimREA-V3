import { NextResponse } from 'next/server';

const MOCK_CHAPTERS = [
  { id: 'houston', name: 'Houston', region: 'North America', members: 1240, image: 'https://images.unsplash.com/photo-1531218150217-54595bc8bbf9?auto=format&fit=crop&q=80&w=800' },
  { id: 'dubai', name: 'Dubai', region: 'Middle East', members: 3100, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
  { id: 'london', name: 'London', region: 'Europe', members: 2150, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { id: 'istanbul', name: 'Istanbul', region: 'Europe/Asia', members: 1800, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800' },
];

export async function GET() {
  return NextResponse.json(MOCK_CHAPTERS);
}