import facebookIcon from "../../assets/images/facebook-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";

export default function MainFooter() {
  return (
    <footer className="px-12 py-4 bg-[var(--background-soft)]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
            <p className="heading-font text-[var(--text-primary)] text-xl">
              Pantry
            </p>
          </div>
          <div>
            <p className="mt-2 font-body max-w-lg">
              A warm, personal cookbook for the way you actually cook. Discover,
              save, and create — all in one beautiful place.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <img className="w-6 h-6" src={facebookIcon} />
          <img className="w-6 h-6" src={linkedinIcon} />
          <img className="w-6 h-6" src={githubIcon} />
        </div>
      </div>
      <hr className="my-4 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
      <div className="flex justify-between">
        <div>
          <p>© 2026 Pantry. Made with care for home cooks everywhere.</p>
        </div>
        <div>
          <ul className="flex gap-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>API</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
