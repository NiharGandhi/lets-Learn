import Image from "next/image"
import Link from "next/link"

const Cta = () => {
  return (
    <section className="cta-section">
        <div className="cta-badge">Start Learning your way.</div>
        <h2 className="text-3xl font-bold">
            Ready to embark on your learning journey?
        </h2>
        <p>
            Join us today and discover a world of knowledge at your fingertips. 
            Whether you're looking to master a new skill, explore a new subject, or 
            simply satisfy your curiosity, we have the resources you need to succeed.
        </p>
        <Image
            src="images/cta.svg" alt="cta illustration" width={362} height={232}
        />
        <button className="btn-primary">
            <Image
                src="/icons/plus.svg"
                alt="plus icon"
                width={12}
                height={12}
            />
            <Link href="/companions/new">
                <p>Build a new companions</p>
            </Link>
        </button>
    </section>
  )
}

export default Cta