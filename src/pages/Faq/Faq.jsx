import React, { useState } from 'react';
import styles from './Faq.module.css'

export default function Faq() {
  const [answersVisible, setAnswersVisible] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const toggleAnswer = (questionId) => {
    setAnswersVisible((prevAnswersVisible) => ({
      ...prevAnswersVisible,
      [questionId]: !prevAnswersVisible[questionId],
    }));
  };

  return (
    <div className={styles['faq-container']}>
      <h1>FAQ</h1>
      <div className={styles['faq-question']} onClick={() => toggleAnswer(1)}>
        <strong>Can I do exercises if I am in pain?</strong>
        {answersVisible[1] && (
          <div className={styles['faq-answer']}>
            Yes, in many cases, gentle exercises can even help alleviate pain. One of biggest myths is that pain = damage, now where that may be true in certain cases in most cases it is now. This is where important to you to listen to your body as you are going to understand your own body better than anyone else. In most cases if you are just getting discomfort or just a slight pain this often means you are not causing damange and it is okay to work through this.
          </div>
        )}
      </div>
      <div className={styles['faq-question']} onClick={() => toggleAnswer(2)}>
        <strong>Do I need a diagnosis/scan to be treated?</strong>
        {answersVisible[2] && (
          <div className={styles['faq-answer']}>
            No! For the majority of patients seen by physiotherapists we are unable to get a confirmed diagnosis but despite this it does not change the treatment plan. Did you even know in a lot of cases people who are without any pain can have a scan and still find many changes so just because a scan finds something doesn't even necessarily mean that is what causing your pain.
          </div>
        )}
      </div>
      <div className={styles['faq-question']} onClick={() => toggleAnswer(3)}>
        <strong>Should I stay in bed when I am in pain?</strong>
        {answersVisible[3] && (
          <div className={styles['faq-answer']}>
            Staying in bed for extended periods may not be beneficial. It's often better to stay active within your pain limits. Again this is where it is very important to listen to your own body. What we want patients to be doing is find out their baseline and gradually build this up over time.
          </div>
        )}
      </div>
      <div className={styles['faq-question']} onClick={() => toggleAnswer(4)}>
        <strong>Is there any one exercise I should be doing?</strong>
        {answersVisible[4] && (
          <div className={styles['faq-answer']}>
            There is no one-size-fits-all exercise. It is all about finding the exerices that you are most comfotable with. Check out our exercises page for some general exercises you can start today!
          </div>
        )}
      </div>
      <div className={styles['faq-question']} onClick={() => toggleAnswer(5)}>
        <strong>What is the best posture?</strong>
        {answersVisible[5] && (
          <div className={styles['faq-answer']}>
            There is no such thing as the best posture. What's more important is being in a position that is comfortable for you as this can vary between every individual. It is then important to understand whatever position you are in what's vital is to not stay in any one position for too long.
          </div>
        )}
      </div>
      <div className={styles['faq-question']} onClick={() => toggleAnswer(6)}>
  <strong>Will I see improvement solely through exercise?</strong>
  {answersVisible[6] && (
    <div className={styles['faq-answer']}>
      While exercise is an essential component, modern physiotherapy adopts a holistic approach. Your journey to recovery involves more than just physical activity. Factors such as sleep patterns, diet, weight management, stress levels, and overall activity play crucial roles. Addressing these aspects collectively ensures a comprehensive and effective strategy to optimize your well-being.
    </div>
  )}
</div>

<div className={styles['faq-question']} onClick={() => toggleAnswer(7)}>
  <strong>Is a massage or hands-on therapy necessary for recovery?</strong>
  {answersVisible[7] && (
    <div className={styles['faq-answer']}>
      Not necessarily! At WaitLessWellness, we prioritize evidence-based practices. While hands-on treatments may offer immediate relief for some, it's essential to recognize that such approaches might provide short-term benefits. For sustainable, long-term management, our focus as physiotherapists is on empowering you with tools and exercises. This comprehensive approach ensures that you can independently manage your condition effectively.
    </div>
  )}
</div>
    </div>
  );
}
