package com.example.wbdvsp2102jannunziserverjava.models;

import javax.persistence.*;

@Entity
@Table(name="widgets")
public class Widget {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    
    private String topicIc;
    private String type;
    private Integer size;
    private String text;
    private Integer width;
    private Integer height;
    private String src;
    private Boolean ordered;

    public Boolean getOrdered() {
        return ordered;
    }

    public void setOrdered(Boolean ordered) {
        this.ordered = ordered;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicIc() {
        return topicIc;
    }

    public void setTopicIc(String topicIc) {
        this.topicIc = topicIc;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Widget(Long id, String topicIc, String type, Integer size, String text) {
        this.id = id;
        this.topicIc = topicIc;
        this.type = type;
        this.size = size;
        this.text = text;
    }

    public Widget() {
    }
}


/*
    create table widget (
       id bigint not null,
        size integer,
        text varchar(255),
        topic_ic varchar(255),
        type varchar(255),
        primary key (id)
    ) engine=InnoDB
 */

/*
    create table widgets (
       id bigint not null auto_increment,
        size integer,
        text varchar(255),
        topic_ic varchar(255),
        type varchar(255),
        primary key (id)
    ) engine=InnoDB

 */

/*
 alter table widgets 
       add column height integer
    
    alter table widgets 
       add column src varchar(255)
    
    alter table widgets 
       add column width integer
 */

/*
    alter table widgets 
       add column ordered bit

 */