// import AgentsTable from '@/components/agents/AgentsTable';
import AgentsTable2 from '@/components/agents/AgentsTable2';
import HeaderAgents from '@/components/agents/HeaderAgents';
// import SubAgentsTable from '@/components/agents/SubAgentsTable';
import SubAgentsTable2 from '@/components/agents/SubAgentsTable2';
import React from 'react';

const page = () => {
    return (
        <div>
            <HeaderAgents/>
            <AgentsTable2/>
            <SubAgentsTable2/>
        </div>
    );
};

export default page;