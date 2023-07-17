import "@/components/styles/landing-page-styles/rulesSectionStyles.scss"

function Rules() {
  
  const rules =  [
    "Treat everyone with respect in discussion groups. We do not tolerate any kind of harassment.",
    "You are not allowed to brute-force any challenge on a server, unless specified otherwise.",
    "Do not share your login credentials with anyone other than your teammates.",
    "Violation of any of the rules may lead to disqualification.",
    "Regarding all disputes, the decision by admins is final.",
    "Collaboration between competing teams is not allowed.",
    "Posting flags in any channel is strictly prohibited.",
    "The flag format is: CTF{th1s_i5_4_s4mpl3_fl4g}",
    "Do not post write-ups until the CTF is over.",
    "Do not hack the CTF infrastructure.",
    "Team size is up to 4 players.",
  ];

  return <div className="rulesSection" id="RulesSection">
    <h1 className="ruleSectionTitle">Rules</h1>
    <ul>
        {
            rules.map(
                (rule,index) => <li className="rule" key={index}>
                        {rule}
                </li>
            )
        }
    </ul>
  </div>;
}
export default Rules;