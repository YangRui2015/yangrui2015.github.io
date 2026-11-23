(() => {
  const groups = [
    ['foundation-models-for-interactive-agents', 'Agents', 'Foundation models for interactive agents'],
    ['reliable-reasoning-and-alignment', 'Reasoning & Alignment', 'Reliable reasoning and alignment'],
    ['robust-offline-rl-and-goal-conditioned-rl', 'RL', 'Robust offline and goal-conditioned RL']
  ].map(([id, label, description]) => {
    const heading = document.getElementById(id);
    return { id, label, description, heading, panel: heading?.nextElementSibling };
  });
  if (groups.some(group => !group.heading || group.panel?.tagName !== 'UL')) return;

  const tabs = document.createElement('div');
  tabs.className = 'publication-tabs';
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-label', 'Publication research areas');
  groups[0].heading.before(tabs);

  function select(index, focus = false) {
    groups.forEach((group, i) => {
      const active = i === index;
      group.button.setAttribute('aria-selected', String(active));
      group.button.tabIndex = active ? 0 : -1;
      group.heading.hidden = !active;
      group.panel.hidden = !active;
    });
    if (focus) groups[index].button.focus();
  }

  groups.forEach((group, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `tab-${group.id}`;
    button.className = 'publication-tab';
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', `papers-${group.id}`);
    const label = document.createElement('strong');
    label.textContent = group.label;
    button.append(label);
    group.button = button;
    group.panel.id = `papers-${group.id}`;
    group.panel.setAttribute('role', 'tabpanel');
    group.panel.setAttribute('aria-labelledby', button.id);
    group.panel.tabIndex = 0;
    button.addEventListener('click', () => select(index));
    button.addEventListener('keydown', event => {
      const keys = { ArrowRight: (index + 1) % groups.length, ArrowLeft: (index + groups.length - 1) % groups.length, Home: 0, End: groups.length - 1 };
      if (Object.prototype.hasOwnProperty.call(keys, event.key)) {
        event.preventDefault();
        select(keys[event.key], true);
      }
    });
    tabs.append(button);
  });
  function selectHash() {
    const index = groups.findIndex(group => `#${group.id}` === location.hash);
    select(index < 0 ? 0 : index);
  }
  selectHash();
  window.addEventListener('hashchange', selectHash);
})();
