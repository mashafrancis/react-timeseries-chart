import { ReactNode } from 'react';

export interface ChartCardProps {
	heading?: string;
	body: ReactNode;
	redirect?: (cardId: string) => void;
	actionItem?: ReactNode;
	styles?: any;
}
