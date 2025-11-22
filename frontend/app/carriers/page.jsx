
import CarriersFilters from '@/components/carries/CarriersFilters';
import CarriersHeader from '@/components/carries/CarriersHeader';
import CarriersTable from '@/components/carries/CarriersTable';

import React from 'react';

const page = () => {
    return (
        <div>
            <CarriersHeader/>
            <CarriersFilters/>
            <CarriersTable/>
        </div>
    );
};

export default page;