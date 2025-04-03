import { ImageCard } from '@sb1/ffe-cards-react';
import React from 'react';
import { StatusColors } from '../utils/types';
import MoistureStatusMessage from './MoistureStatusMessage';

interface RecentSensorValueCardProps {
    status: StatusColors;
    title: string;
    subtext?: string;
    description?: string;
    imageSrc?: string;
    children?: React.ReactNode;
}

const RecentSensorValueCard: React.FC<RecentSensorValueCardProps> = ({ status, title, subtext, description, imageSrc, children }) => {
    return (
        <ImageCard imageSrc={imageSrc} imageAltText="test" className='moisture-card' noMargin={true}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <Title>{title}</Title>
                    <Subtext>{subtext}</Subtext>
                    <Text>
                        {description}
                    </Text>
                    <MoistureStatusMessage status={status} />
                    {children}
                </>
            )}
        </ImageCard>
    );
};

export default RecentSensorValueCard;