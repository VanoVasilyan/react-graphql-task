import React from 'react'
import { StyledErrorComponent } from './ErrorComponent.style';

const ErrorComponent = ({ errorMessage }: { errorMessage: string }) => (
    <StyledErrorComponent>
        <p>Error occurred:</p>
        <p>{errorMessage}</p>
    </StyledErrorComponent>
);

export default ErrorComponent;
