import { getUser } from '@/lib/actions/user/get-user';
import React from 'react'
import UpdateForm from '../_components/form/update-form';
import PageWrapper from '@/components/ui/page-wrapper';


interface DashboardSettingsPageProps {
    params: {
        id: string;
    };
}


const DashboardSettingsPage: React.FC<DashboardSettingsPageProps> = async ({ params }) => {
    const { id } = params;
    console.log("ID " + id)
    const user = await getUser(id)
    console.log("User " + user )
  return (
    <section className='min-h-screen p-2'>
        <div className='max-w-screen-lg mx-auto p-4'>
            <UpdateForm userId={id} />
            <PageWrapper>
                Side Panel
            </PageWrapper>
        </div>
    </section>
  )
}

export default DashboardSettingsPage