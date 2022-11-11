export interface Trip {
  id: number;
  name: string;
  description: string;
  destination: string;
  budget: number;
  date: string;
  requiresRiskAssessment: boolean;
}

export interface Expense {
  id: number;
  tripId: number;
  name: string;
  category: string;
  cost: number;
  description: string;
}
