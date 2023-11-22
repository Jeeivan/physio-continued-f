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
        <strong>Will I get better with just exercising?</strong>
        {answersVisible[6] && (
          <div className={styles['faq-answer']}>
            No! Modern physiotherapy is now emphasising a biopsychosocial approach which means treatment is never just exercising alone. It includes looking into how many of hours of sleep you are getting, you're diet, you're weight, stresses in life, how active you are. By working on all these things is going to make sure you are putting yourself in the best positiion going forward.
          </div>
        )}
      </div>
    </div>
  );
}
