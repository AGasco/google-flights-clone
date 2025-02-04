import { format } from 'date-fns';

export const formatTime = (dateString: string): string => {
  return format(new Date(dateString), 'h:mm a');
};

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};
