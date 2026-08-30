export type AnswerContentBlock =
  | { type: "heading" | "paragraph" | "strong"; text: string }
  | { type: "example"; lines: string[] };

export type Answer = {
  slug: string;
  path: string;
  title: string;
  description: string;
  datePublished: string;
  content: AnswerContentBlock[];
};

export const answers: Answer[] = [
  {
    slug: "how-to-make-friends-at-uni",
    path: "/answers/how-to-make-friends-at-uni",
    title: "How do you make friends at uni?",
    description: "Making friends at uni isn't only about meeting people. Turning new acquaintances into friends usually means making another plan and spending time together again.",
    datePublished: "2026-08-30",
    content: [
      { type: "paragraph", text: "The usual advice for making friends at uni is good: talk to people on your course, join societies, go to things during Freshers and be willing to make the first move." },
      { type: "paragraph", text: "But there's another part that's easy to overlook." },
      { type: "strong", text: "Meeting people gives you acquaintances. Becoming friends usually means finding ways to keep spending time together." },
      { type: "paragraph", text: "So when you meet someone you get on with, don't just swap Instagrams and hope you bump into each other again. Make a plan. Bring a few people together. Do something else the following week. Let people bring people they know." },
      { type: "paragraph", text: "That's how a collection of new faces can gradually start feeling like your people." },
      { type: "heading", text: "Don’t just meet people. Make a second plan." },
      { type: "paragraph", text: "At the beginning of uni, you can meet a ridiculous number of people without becoming particularly close to any of them." },
      { type: "paragraph", text: "The useful next step is to turn “we should do something sometime” into an actual plan." },
      { type: "paragraph", text: "It doesn't need to be a big night out. Get coffee after a lecture. Grab food. Study together. Go to a pub quiz. Cook dinner. Go to a society event together." },
      { type: "paragraph", text: "The activity matters less than giving yourselves another reason to spend time together." },
      { type: "heading", text: "You can bring separate friendships together" },
      { type: "paragraph", text: "You don't necessarily need to find an existing friendship group and somehow get into it." },
      { type: "paragraph", text: "You might meet Amy in halls, James on your course and Sophie at a society. If you like all three of them, invite them to something together." },
      { type: "paragraph", text: "Then maybe one of them brings someone they know." },
      { type: "paragraph", text: "That is often how a social circle starts taking shape: different connections gradually overlap." },
      { type: "strong", text: "You don't only find friendship groups. You can gradually make one." },
      { type: "heading", text: "Loopt can make that bit easier" },
      { type: "paragraph", text: "Loopt is built for everyday plans like this." },
      { type: "paragraph", text: "You can put up what you're doing, add the people you want to include, and decide whether they can add other people too." },
      { type: "paragraph", text: "For example:" },
      { type: "example", lines: ["pub after lectures", "Thursday · 7pm"] },
      { type: "paragraph", text: "Add a few people you think might get on. If they can add others too, the plan can grow naturally through people rather than one person having to know everybody from the start." },
      { type: "paragraph", text: "You're still meeting people through people. Loopt just gives the plan somewhere to happen." },
      { type: "heading", text: "The really important bit is doing it again" },
      { type: "paragraph", text: "One good night together doesn't automatically create a friendship group." },
      { type: "paragraph", text: "What matters is making it easy for the people who got on to see each other again." },
      { type: "paragraph", text: "Loopt is designed around this too. The same people can be there for future plans, so someone in the group can start the next thing rather than the original organiser always having to recreate everything." },
      { type: "paragraph", text: "You put up Thursday drinks." },
      { type: "paragraph", text: "Someone else puts up a Sunday walk." },
      { type: "paragraph", text: "Another person adds everyone to a pub quiz the following week." },
      { type: "paragraph", text: "Someone misses one of them but comes to the next." },
      { type: "paragraph", text: "The aim isn't to organise your friendship. It's simply to make it easier for seeing each other once to turn into seeing each other again." },
      { type: "heading", text: "Meeting friends of friends can widen your circle too" },
      { type: "paragraph", text: "As plans start overlapping, you may also meet people through people you already know." },
      { type: "paragraph", text: "Loopt's connections are designed around this kind of real-world overlap. Its “you might know” suggestions can surface second-level connections you've shared a plan with, rather than matching you with random strangers." },
      { type: "paragraph", text: "So the circle can grow through actual people and plans you've been part of." },
      { type: "heading", text: "What if I haven't found my people during Freshers?" },
      { type: "paragraph", text: "Don't treat Freshers as a deadline for finding your friendship group." },
      { type: "paragraph", text: "You don't need twenty new best friends in the first week. A handful of people you'd genuinely like to see again is enough to start with." },
      { type: "paragraph", text: "Pick someone. Suggest something. Bring a few people together if it feels natural." },
      { type: "paragraph", text: "Then do it again." },
    ],
  },
];

export function getAnswerBySlug(slug: string | undefined) {
  return answers.find((answer) => answer.slug === slug);
}
