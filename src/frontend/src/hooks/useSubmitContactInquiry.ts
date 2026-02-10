import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  mobileNumber: string;
  eventType: string;
  eventDate: string | null;
  message: string;
}

export function useSubmitContactInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitContactForm(
        data.name,
        data.mobileNumber,
        data.eventType,
        data.eventDate,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}
