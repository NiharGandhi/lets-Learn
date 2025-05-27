import React from 'react'
import { Button } from "@/components/ui/button";
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import { recentSessions } from '@/constants';
import Cta from '@/components/CTA';
import { getAllCompanions, getRecentSessions, getBookmarkStatuses } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  const bookmarkStatuses = await getBookmarkStatuses(
    companions.map(c => c.id)
  );
  

  return (
    <main>
      <h1 className="text-2xl underline">
        Popular Companions
      </h1>

      <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                    bookmarked={!!bookmarkStatuses[companion.id]}
                />
            ))}

        </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
            <Cta />
        </section>
    </main>
  )
}

export default Page