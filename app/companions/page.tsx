import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions, getBookmarkStatuses } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({
    subject,
    topic 
  });

  const bookmarkStatuses = await getBookmarkStatuses(
    companions.map(c => c.id)
  );


  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard 
            key={companion.id} 
            { ...companion } 
            color={getSubjectColor(companion.subject)}
            bookmarked={!!bookmarkStatuses[companion.id]}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary