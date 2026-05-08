export const generatePBE = (theme: string, kinks: string[], intensity: number, bodyTypes: string[] = ['muscular hunk', 'athletic twink', 'hairy bear']) => {
  const subjects = `(${bodyTypes.join(', ')}, 18+, hyper-detailed male anatomy, glistening sweat, perfect proportions)`;
  const acts = kinks.length ? kinks.join(', ') : 'deep anal penetration, passionate oral, rimming, cum explosion';
  const descriptors = `throbbing veiny cocks:${intensity/10 + 0.5}, stretched asses, dripping precum, moaning ecstasy faces, raw dominant lust, tender power exchange`;
  const setting = theme || 'steamy leather club sauna';

  const positivePrompt = `ultra-detailed 8k hyperrealistic, breathtakingly attractive gay erotica masterpiece, ${subjects} lost in ${acts} inside ${setting}, ${descriptors}, (sweaty skin:1.4), (Tom of Finland + modern erotic photography:1.3), cinematic volumetric lighting, dramatic shadows accentuating every muscle and vein, 8k resolution, masterpiece --ar 16:9`;

  const negatives = '(censored, blurred genitals, female, underage, deformed, low quality, text, watermark, cartoon)';

  return {
    prompt1: positivePrompt,
    negatives,
    variants: [
      positivePrompt.replace('sauna', 'dark forest encounter') + ' (leather harnesses:1.2)',
      positivePrompt.replace('anal', 'fisting + edging') + ' (group orgy:1.3)',
      positivePrompt.replace('twink', 'massive bear') + ' (BDSM spanking:1.4)'
    ],
    roiEstimate: `This prompt set could yield 250% ROI in adult NFT sales or premium memberships via extreme engagement from gay male audiences`
  };
};
