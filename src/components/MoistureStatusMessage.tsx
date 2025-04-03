import React from 'react';
import { StatusColors } from '../utils/types';
import { ContextMessage } from '@sb1/ffe-messages-react';

interface MoistureStatusMessageProps {
    status: StatusColors;
}

const MoistureStatusMessage: React.FC<MoistureStatusMessageProps> = ({ status }) => {
    const statusMessages: Record<StatusColors, string> = {
        [StatusColors.Good]: 'Fuktighetsnivået er bra',
        [StatusColors.Warning]: 'Fuktighetsnivået er ganske lavt',
        [StatusColors.Danger]: 'Fuktighetsnivået er kritisk lavt',
    };

    return <ContextMessage type={status} compact={true} className='moisture-status-message'>
        {statusMessages[status]}
    </ContextMessage>;
};

export default MoistureStatusMessage;