import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";

export default function PublicFooter() {
  return (
    <footer className="px-4 sm:px-8 text-xs sm:text-sm py-8 bg-[var(--background-soft)]">
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
            <p className="heading-font text-[var(--text-primary)] text-xl">
              Pantry
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/nehemiah-browndev"
              target="_blank"
            >
              <img className="w-7 h-7" src={linkedinIcon} />
            </a>
            <a href="https://github.com/NehemiahBrown/pantry" target="_blank">
              <img className="w-7 h-7" src={githubIcon} />
            </a>
          </div>
        </div>
        
      </div>

      <hr className="my-4 border-0 h-px mx-auto w-full lg:w-full bg-[var(--divider)]" />
      <div className="flex justify-between gap-2">
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
