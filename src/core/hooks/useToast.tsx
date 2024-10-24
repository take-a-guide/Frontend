import { toast as toasts } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IToastProps {
  title: string;
  position?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const useToast = () => {
  const toast = ({
    title,
    position = 'top-right',
    type = 'default',
  }: IToastProps) => {
    switch (type) {
      case 'success':
        toasts.success(title, { position });
        break;
      case 'error':
        toasts.error(title, { position });
        break;
      case 'warning':
        toasts.warn(title, { position });
        break;
      case 'info':
        toasts.info(title, { position });
        break;
      default:
        toasts(title, { position });
    }
  };

  return {
    toast,
  };
};
