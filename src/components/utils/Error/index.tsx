import { ErrorFormat } from '@/utils/models/ErrorFormat';
import './style.scss';

export const Error = ({ name, message } : ErrorFormat) => {    
    return (
        <div className="error-content">
            <p>{name}</p>
            <p>{message}</p>
        </div>
    );
};