<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep the salon experience as a single content route with anchored sections, because the portfolio, team and contact details form one browsing flow.
- Serve uploaded salon media through asset JSON pointers, because source media must stay outside the repository.
- Define visual styles and semantic tokens in the global stylesheet and use shared Button variants for interactions, because the editorial design must remain consistent.
