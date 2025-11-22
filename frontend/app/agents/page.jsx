import AgentsTable from '@/components/agents/AgentsTable';
import HeaderAgents from '@/components/agents/HeaderAgents';
import SubAgentsTable from '@/components/agents/SubAgentsTable';
import React from 'react';

const page = () => {
    return (
        <div>
            <HeaderAgents/>
            <AgentsTable/>
            <SubAgentsTable/>
        </div>
    );
};

export default page;