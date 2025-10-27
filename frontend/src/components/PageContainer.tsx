import React from 'react';
import BackButton from './BackButton';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen py-28">
      <BackButton />
      <div className="container mx-auto px-6 lg:px-12">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;